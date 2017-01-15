from setuptools import setup, find_packages
import os

version = '1.0.0'

PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))

long_description = open(os.path.join(PROJECT_PATH, 'README.md')).read()

install_requires = open(
    os.path.join(PROJECT_PATH, 'requirements.txt')
).read().splitlines()

setup(
    name='model-graph-api',
    version=version,
    description="Graph model api",
    long_description=long_description,
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Django',
    ],
    keywords=[],
    author='Customer Sounds',
    author_email='info@customersounds.com',
    url='customer-sounds.com',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=install_requires,
    scripts=['manage.py'],
)
