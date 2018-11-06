module.exports = {
  apps : [{
      name: 'HTTP-API',
      script: '/src/app.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
          NODE_ENV: 'development'
      },
      env_production: {
          NODE_ENV: 'production'
      }
  }],

    deploy : {
        production : {
            user : 'root',
            host : 'localhost',
            ref  : 'origin/master',
            repo : 'https://github.com/xuweikang/koa-mysite.git',
            path : '/home/koa-mysite',
            "ssh_options": "StrictHostKeyChecking=no",
            'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.js',
            'pre-setup': 'rm -rf /source'
        },
    }
};

