import { Selector } from 'testcafe';

fixture('test for the home page component')
  .page('http://localhost:333');

test('my first sample test case', async t => {
    await t.expect(Selector('.className').count).eql(0);
});


test('h2 heading must be Resources', async (t) => {
  const title = Selector('h2');
  await t
    .expect(title.innerText).eql('Resources');
});

test('Card container exists', async t => {
  const cardContainerexist = Selector('.card-container').exists;

  await t
      .expect(cardContainerexist).ok()
})

test('Testing for links and their count', async t => {
  const areLinksPresent = Selector('.card-container').child('a');
  const linksCount = Selector('.card-container').child('a').count;

  await t
      .expect(areLinksPresent).ok()
      .expect(linksCount).eql(3);
})
