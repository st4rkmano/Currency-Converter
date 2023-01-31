{
    const updateResultText = (outcome: number, currency: string): void => {
        const jsResult = <HTMLSpanElement>document.querySelector(".js-result");

        jsResult.innerText = `${outcome.toFixed(2)} ${currency}`;
    };

    const getRate = (): number => {
        const jsStartCurrency = <HTMLSelectElement>document.querySelector(".js-startCurrency");
        const jsEndCurrency = <HTMLSelectElement>document.querySelector(".js-endCurrency");
        const currencyPair = `${jsStartCurrency.value}${jsEndCurrency.value}`;

        switch (currencyPair) {
            case "PLNEUR":
                return 0.21307;

            case "PLNUSD":
                return 0.21301;

            case "PLNCHF":
                return 0.210728;

            case "USDPLN":
                return 4.6595;

            case "USDEUR":
                return 1.00011;

            case "USDCHF":
                return 0.989302;

            case "CHFPLN":
                return 4.74466;

            case "CHFEUR":
                return 1.01104;

            case "CHFUSD":
                return 1.01081;

            case "EURPLN":
                return 4.6678;

            case "EURUSD":
                return 0.999743;

            case "EURCHF":
                return 0.989049;

            default:
                return 1;
        }
    };

    const onFormChange = () => {
        const jsEndCurrency = <HTMLSelectElement>document.querySelector(".js-endCurrency");
        const jsAmount = <HTMLInputElement>document.querySelector(".js-amount");
        const rate = getRate();

        const value = +jsAmount.value;
        updateResultText(rate * value, jsEndCurrency.value);
    };

    const init = () => {
        const calculator = <HTMLFormElement>document.querySelector(".js-calculator");
        calculator.addEventListener("input", onFormChange);
    };

    init();
}
