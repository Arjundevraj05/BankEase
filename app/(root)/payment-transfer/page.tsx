import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import PlaidLink from '@/components/PlaidLink'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if (!accounts || !accounts.data?.length) {
    return (
      <section className="payment-transfer">
        <HeaderBox 
          title="Payment Transfer"
          subtext="Connect a bank account before you can send money."
        />
        <div className="mt-8 flex max-w-lg flex-col items-start gap-4">
          <div className="glass-card w-full p-6">
            <p className="text-14 text-gray-600">
              You need at least one linked bank account to make a transfer.
            </p>
            <div className="mt-4">
              <PlaidLink user={loggedIn} variant="primary" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Send money to another user using their Shareable ID."
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer
