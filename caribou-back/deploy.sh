set -e
rm -rf build archive.tar.gz temp
mkdir temp
cp -R config temp/
cp -R database temp/
cp -R src temp/
cp .env temp/
cp package.json temp/
cd temp && tar -czf ../archive.tar.gz . && cd ..
rm -rf temp
cd .ansible
ansible-playbook deploy.yml -i hosts
cd .. && rm archive.tar.gz
