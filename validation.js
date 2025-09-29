function validateTransaction(transaction) {
    return validateAmount(transaction.amount) && 
           validateCurrency(transaction.currency);
}
