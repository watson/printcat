#!/usr/bin/env node
'use strict'

var Printer = require('ipp-printer')

var printcat = new Printer('printcat')

printcat.on('job', function (job) {
  job.on('end', function () {
    process.exit()
  })

  job.pipe(process.stdout)
})
