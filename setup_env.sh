echo CI_REGISTRY_USER=$CI_REGISTRY_USER   >> .env
echo CI_JOB_TOKEN=$CI_JOB_TOKEN  >> .env
echo CI_REGISTRY=$CI_REGISTRY  >> .env

echo DATABASE_URL=$DATABASE_URL >> .env
echo SECRET_KEY=$SECRET_KEY >> .env
echo REACT_APP_SERVICE_URL=$REACT_APP_SERVICE_URL >> .env
echo LETSENCRYPT_EMAIL=$LETSENCRYPT_EMAIL >> .env
echo SUBDOMAIN=$SUBDOMAIN >> .env

echo FRONTEND_IMAGE=$IMAGE:frontend  >> .env
echo BACKEND_IMAGE=$IMAGE:backend  >> .env
