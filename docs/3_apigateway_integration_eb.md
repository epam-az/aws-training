# Create AWS Api Gateway and integrate it with eb app.
1. Open console.
2. Create REST API gateway.
3. Create New Child Resource:
   1. Configure as proxy resource
   2. Resource Name: proxy
   3. Resource Path: {proxy+}
4. Create method:
   1. HTTP method: ANY
   2. Integration type: HTTP
   3. Endpoint URL: http://your_app.eu-central-1.elasticbeanstalk.com
   4. Content Handling: Passthrough
5. Deploy api:
   1. Stage name: <stage_name>
6. Check new api following a new link https://<you-api>.execute-api.eu-central-1.amazonaws.com/<stage_name>
