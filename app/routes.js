//

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ---------------------------
// V1 ROUTES
// ---------------------------

// Apply RDS only to v1 pages
router.all('/v1*', function (req, res, next) {  
    res.locals.serviceName = 'RDS' 
    next()
})


// Start page

router.get('/v1/', function (req, res) {  res.render('v1/index');

});

// Next page
router.get('/v1/start-now', function (req, res) {  res.render('v1/start-now');});

router.get('/v1/sign-in-options', function (req, res) {  res.render('v1/sign-in-radio');});``

//sing-in-options
router.post('/v1/sign-in-options', function (req, res) 
{  const choice = req.body.signIn;
     if (choice === 'username') 
        {    return res.redirect('/v1/sign-in-username');  

        }
     if (choice === 'sso') {
        return res.redirect('/v1/sign-in-sso');  
    }
});

// ---------------------------
// V2 ROUTES
// ---------------------------

// Apply RDS only to v2 pages
router.all('/v2/*', function (req, res, next) {
  res.locals.serviceName = 'RDS'
  next()
})

// Start page
router.get('/v2/', function (req, res) {
  res.render('v2/index')
})

// Next page
router.get('/v2/start-now', function (req, res) {
  res.render('v2/start-now')
})


// ---------------------------
// V3 ROUTES
// ---------------------------

// Apply RDS only to v3 pages
router.all('/v3/*', function (req, res, next) {
  res.locals.serviceName = 'RDS'
  next()
})

// Start page
router.get('/v3/', function (req, res) {
  res.render('v3/index')
})

// Next page
router.get('/v3/start-now', function (req, res) {
  res.render('v3/start-now')
})

router.post('/med-delete', function(request, response) {

	var record = request.session.data['record']
	if (record == "yes"){
		response.redirect("/v3/med-delete-success")
	} else {
		response.redirect("/v3/summary-edit")
	}
})

router.post('/med-create-option', function (req, res) {

var create = req.session.data['create']

if (create === 'basic-record') {
res.redirect('/v3/med-name')
} else if (create === 'complete-record') {
res.redirect('/v3/summary-edit')
} else {
res.redirect('/med-create-option')
}

})