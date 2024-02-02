it('File upload', async () => {
    await browser.url('File-Upload/index.html');
    await $('[id="myFile"]').addValue(`${process.cwd()}\\test\\uploadTestFile.txt`)
    await $('[id="submit-button"]').click()

    const alertText = await browser.getAlertText();
    expect(alertText).toEqual('Your file has now been uploaded!');

});

async function fileUpload() {
await browser.url('File-Upload/index.html');
    await $('[id="myFile"]').addValue(`${process.cwd()}\\test\\uploadTestFile.txt`)
    await $('[id="submit-button"]').click()

    const alertText = await browser.getAlertText();
    expect(alertText).toEqual('Your file has now been uploaded!');
};