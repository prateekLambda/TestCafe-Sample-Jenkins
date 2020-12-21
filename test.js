import { Selector } from 'testcafe';

fixture('LambdaTest landing page').page(
    'https://www.lambdatest.com/'
)

test("Should have a title", async page => {
    const title = Selector('section.testing_cloud_section > div > div > h1');
    await page
        .expect(title.innerText)
        .eql('Cross Browser Testing Cloud');
});
