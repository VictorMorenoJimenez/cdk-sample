import { SynthUtils } from '@aws-cdk/assert'
import '@aws-cdk/assert/jest'
import * as cdk from '@aws-cdk/core';
import * as CdkSample from '../lib/cdk-sample-stack';

test('Test MyCdkSampleStack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkSample.CdkSampleStack(app, 'MyCdkSampleStack');
    // THEN
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
});
