# Amazon RDS
1. Create RDS database
2. Choose standard database creation method
    1. Engine type: Postgress 12.8
    2. DB instance size: Free tier db.t2.micro 1 vCPUs 1 GiB RAM 20 GiB 0.029 USD/hour (it would be free first 12 months)
3. Set master user / master password
4. Set initial database.
5. After you create database modify settings
   Connectivity -> Additional configuration -> Publicly accessible <br>
   _By default it not possible connect to the instance outside VPC. In order to connect you db via db client you should allow public access._

You might have problems with connection to database (Request timeout). Follow the link with the solution.
https://stackoverflow.com/questions/61062027/aws-rds-to-pgadmin-error-saving-properties-unable-to-connect-to-server-timeout
