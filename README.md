# Joe Gibbs Personal Bio Site

This is the personal bio site for Joe Gibbs

Site Link: <https://joe-gibbs-bio-site.netlify.app/>

## About the User

The user is someone who is interested in my work.

## Video Walkthrough

...coming soon.

## Relevant Links

Repo: <https://github.com/jgibbs1188/bio-site>

Flow Chart: <https://docs.google.com/presentation/d/1Mrn0pCWsj0TxNgNiado1-4P9sMkXzjEQbmsvLPB8eB8/edit#slide=id.p>

ERD: <https://dbdiagram.io/d/619322e402cf5d186b57b0c1>

## Code Snippet

```
export default function Footer({ user }) {
  return (
    <FooterStyle>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-link active navbar-brand" aria-current="page">
          FOOTER
        </div>
        {user ? <SignOutButton /> : <SignInButton />}
      </nav>
    </FooterStyle>
  );
}
```

The above code let's me use a hidden Sign In/Sign Out button. When signed in, I can modify certain aspects of the site. When I'm not signed in, those aspects are not visible.

## Contributors

Joe Gibbs: <https://github.com/jgibbs1188>
