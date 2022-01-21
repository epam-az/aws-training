## First deploy to aws using elasticbeanstalk
Install elastic beanstalk using this instractions https://github.com/aws/aws-elastic-beanstalk-cli-setup

```
eb init --profile <your_profile>
eb create --cname <your_subdomain_name> --single
```

***IMPORTANT***
**single** flag allows you create the environment with a single Amazon EC2 instance and without a load balancer.
t2.micro instance without load balancer would be free for charge

## Redeploy using elasticbeanstalk
```
eb deploy
```

## Terminate aws instances
```
eb terminate --all
```

## Integration with RDS
Connection sting in your app usually looks likes this:
`postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`

Elasticbeanstalk allows to set process.env using configuration files:
1. Create .ebextensions folder
2. Create next file inside env.config:
```
option_settings:
  - option_name: RDS_USERNAME
    value: postgres
  - option_name: RDS_PASSWORD
    value: pass
  - option_name: RDS_HOSTNAME
    value: <your_postgress_instatnce>.eu-central-1.rds.amazonaws.com
  - option_name: RDS_PORT
    value: 5432
  - option_name: RDS_DB_NAME
    value: postgres
```

or use console

```
eb setenv RDS_USERNAME=postgres
eb setenv RDS_PASSWORD=pass
eb setenv RDS_HOSTNAME=postgres.eu-central-1.rds.amazonaws.com
eb setenv RDS_PORT=5432
eb setenv RDS_DB_NAME=test_db
```

After next redeploy Elasticbeanstalk automatically save them in Environment properties.

***Important***
By default, Elastic Beanstalk installs dependencies in production mode (npm install --production). If you want to install development dependencies on your environment instances, set the NPM_USE_PRODUCTION environment property to false.
