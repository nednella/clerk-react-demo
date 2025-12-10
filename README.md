# Clerk Issue Demo

Install with the usual `npm i` and copy `.env.template` into `.env` with a populated Clerk key.

Run with `npm run dev`.

### Context

This application does not have dedicated routes for login and register functions. Instead, it uses dialogs to render the pre-built `<SignIn />` and `<SignUp />` components (in this case, only the former, as I want to restrict the registration to people who have been given the link to the Clerk accounts portal).

### Issue

Upon registering via 3rd party OAuth, the user is redirected back to the application to the path `{URL}/#/sso-callback`.

As there is no pre-built clerk component that renders on the route `/` by default, the CAPTCHA registration flow gets stuck, as it cannot find a `div` with the property `id="clerk-captcha"`.

To continue the flow, users have to click the login button again in order to render the dialog with the Clerk component, so that the CAPTCHA can be rendered and completed.

### Resolving the issue

I know the solution is to render the `<AuthenticateWithRedirectCallback />` component on a specified route, e.g. `{URL}/sso-callback`, but I am unsure on how to do this correctly, which is the point when I reached out.

### Issue on video

https://github.com/user-attachments/assets/77c11b5e-01e5-4858-96b2-410b438d3310



