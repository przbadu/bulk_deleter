import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Accounts from '../components/accounts';
import Customers from '../components/customers';

export default [
  {
    label: 'Account',
    path: '/admins',
    component: Accounts,
    name: 'root_path',
  },
  // { label: 'Bill', path: '/admins/bills' },
  // { label: 'Bill Payment', path: '/admins/bill_payments',
  // { label: 'Cash Purchase', path: '/admins/cash_purchase' },
  // { label: 'Check', path: '/admins/checkes' },
  // { label: 'Credit Card Charge', path: '/admins/cc_charges' },
  // { label: 'Credit Memo', path: '/admins/credit_memos' },
  {
    label: 'Customer',
    path: '/admins/customers',
    component: Customers,
    name: 'customers_path',
  },
  // { label: 'Deposit', path: '/admins/deposits' },
  // { label: 'Employee', path: '/admins/employees' },
  // { label: 'Estimate', path: '/admins/estimates' },
  // { label: 'Invoice', path: '/admins/invoices' },
  // { label: 'Product & Services', path: '/admins/product_services' },
  // { label: 'Journal Entry', path: '/admins/journal_entries' },
  // { label: 'Payment', path: '/admins/payments' },
  // { label: 'Purchase Order', path: '/admins/purchase_orders' },
  // { label: 'Refund Receipt', path: '/admins/refund_receipts' },
  // { label: 'Sales Receipt', path: '/admins/sales_receipts' },
  // { label: 'Time Activity', path: '/admins/time_activities' },
  // { label: 'Transfer', path: '/admins/transfers' },
  // { label: 'Vendor (Supplier)', path: '/admins/vendors' },
  // { label: 'Vendor Credit', path: '/admins/vendor_credits' },
];
