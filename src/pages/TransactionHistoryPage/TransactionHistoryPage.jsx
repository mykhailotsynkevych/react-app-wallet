import { Component } from "react";

class TransactionHistoryPage extends Component {
  render() {
    return (
      <main>
        <h2>TransactionHistoryPage</h2>
        <ul>
        {this.props.transactionsList.map(transactionEl => (
          <li key={transactionEl.id}>
            <p>{transactionEl.transaction}</p>
            <p>{transactionEl.date}</p>
            <p>{transactionEl.time}</p>
          </li>
        ))}
      </ul>
      </main>
    );
  }
}
export default TransactionHistoryPage;
