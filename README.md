# Express API Starter

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

## Start postgres db locally
```
docker-compose up -d
```

# AWS integration using elasticbeanstalk

## Activate aws account
* Registry and activate aws account.
* Create user on whose behalf elasticbeanstalk will deploy everything. Attach AdministratorAccess policy to this use.

***IMPORTANT***

It's not recommended to use root privileges, therefore this user should have shortened rights but sufficient for deploying.

## Install elasticbeanstalk locally
Follow the [guide](https://github.com/aws/aws-elastic-beanstalk-cli-setup)

## First deploy to aws using elasticbeanstalk
```
install [eb cli]
eb init --profile <your_profile>
eb create --cname <your_subdomain_name> --single
```

***IMPORTANT***

**single** flag allows you create the environment with a single Amazon EC2 instance and without a load balancer.
t2.micro instance without load balancer would be free for charge.

## Redeploy using elasticbeanstalk
```
eb deploy
```

## Terminate aws intances
```
eb terminate --all
```

Additional documentation could be found [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html)
