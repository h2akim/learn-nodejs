# Get Started

1. Clone repository from github
   ```git clone git@github.com:h2akim/learn-nodejs.git learn-nodejs```

2. Then run `yarn setup`  - this will pull submodule (client/frontend) and install all dependencies

3. There is available CLI `👻 ghosty` - run `ghosty --help` to see available command

-----

# Testing Purpose

1. Setup MySQL credentials on `.env` based on `.env.example`

2. Install knex cli `yarn global add knex`

3. Run `ghosty db:migrate` to migrate required tables
 
4. Run `ghosty db:seed` to seed testing data
