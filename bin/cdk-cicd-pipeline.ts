#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCicdPipelineStack } from '../lib/cdk-cicd-pipeline-stack';

const app = new cdk.App();
new CdkCicdPipelineStack(app, 'CdkCicdPipelineStack', {
  env: { account: '967789530466', region: 'ap-southeast-2' },
});

app.synth();