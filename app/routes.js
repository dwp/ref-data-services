//

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Apply RDS only to all /v1 pages
router.all('/v1*', function (req, res, next) {  
    res.locals.serviceName = 'RDS' 
    next()
})

// Add your routes here


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

// Landing page (add this)
router.get('/v1/landing-page', function (req, res) {  res.render('v1/landing-page.html');});``
