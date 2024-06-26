## Section 1: Nextjs, Supabase
-  [x] Crud
    - create, read, update, delete
-  [x] login
-  [ ] user role (admin, member)
    - An admin can CRUD todos.
    - A member can read only.
- [x] Ensure routes are protected on API.
- [ ] Ensure tables have appropriate RLS policies.

## Section 2: Nextjs, Supabase
- [ ] Populate todolist with 10,000 fake data todo’s.
- [x] Pagination
- [x] Allow all users to upload a profile picture for their avatar.

## Section 3: Add Express
Note: We will always do file processing, and other “heavy computation” tasks, on Express.
- [x] Users upload their resumes to express (1 or more).
- [x] Express converts resumes to text.
- [ ] Express sends text to Supabase Database.
- [ ] Admin can write a keyword, and all resumes with that keyword will be returned in a list.

Other: 
- [x] validation for form when signup
- [x] pagination using url
- [x] signout
- [x] creating an account will trigger a function to add a data inside of user table (and add default value like their role as member)


## trigger functions:
https://supabase.com/docs/guides/database/functions?queryGroups=language&language=js
https://github.com/orgs/supabase/discussions/13368
