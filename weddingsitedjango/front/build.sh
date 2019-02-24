ng build
mv dist/front/main.js ../wedding/static/
mv dist/front/polyfills.js ../wedding/static/
mv dist/front/runtime.js ../wedding/static/
mv dist/front/styles.js ../wedding/static/
mv dist/front/vendor.js ../wedding/static/
(cd .. &&
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --noinput
# python3 manage.py runserver)
git add *
eb deploy --staged)

