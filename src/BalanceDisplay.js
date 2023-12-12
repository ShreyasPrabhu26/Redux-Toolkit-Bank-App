import { useState } from "react";
import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return (
    <div>
      <div className="balance">
        {formatCurrency(balance)}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance
  }
}

export default connect(mapStateToProps)(BalanceDisplay);
