//

// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Apply RDS only to all /v2 pages
router.all('/v2*', function (req, res, next) {  
    res.locals.serviceName = 'RDS' 
    next()
})

// Add your routes here


// Start page

router.get('/v2/', function (req, res) {  res.render('v2/index');

});


// Next page
router.get('/v2/start-now', function (req, res) {  res.render('v2/start-now');});

router.get('/v2/sign-in-options', function (req, res) {  res.render('v2/sign-in-radio');});``

//sing-in-options
router.post('/v2/sign-in-options', function (req, res) 
{  const choice = req.body.signIn;
     if (choice === 'username') 
        {    return res.redirect('/v2/sign-in-username');  

        }
     if (choice === 'sso') {
        return res.redirect('/v2/sign-in-sso');  
    }
});


