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


