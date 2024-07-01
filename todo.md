## Section 1: Nextjs, Supabase
- [x] Crud
    - create, read, update, delete
- [x] login
- [x] user role (admin, member)
    - An admin can CRUD todos.
    - A member can read only.
- [x] Ensure routes are protected on API.
- [x] Ensure tables have appropriate RLS policies.

## Section 2: Nextjs, Supabase
- [ ] Populate todolist with 10,000 fake data todo’s.
- [x] Pagination
- [x] Allow all users to upload a profile picture for their avatar.

## Section 3: Add Express
Note: We will always do file processing, and other “heavy computation” tasks, on Express.
- [x] Users upload their resumes to express (1 or more).
- [x] Express converts resumes to text.
- [x] Express sends text to Supabase Database.
- [x] Admin can write a keyword, and all resumes with that keyword will be returned in a list.
- [ ] Ensure tables have appropriate RLS policies.

Other: 
- [x] validation for form when signup
- [x] pagination using url
- [x] signout
- [x] creating an account will trigger a function to add a data inside of user table (and add default value like their role as member)
- [x] with pageparam.page is on, it should not remove while doing crud fn on todo


## trigger functions:
https://supabase.com/docs/guides/database/functions?queryGroups=language&language=js
https://github.com/orgs/supabase/discussions/13368


## Question 
1. how to pass auth header from epxress to supabase
2. does using supabase in client component expose env variable? (no)
