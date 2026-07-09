import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-6">
          <h2 className="text-18 font-poppins font-semibold text-gray-900">
            Your cards
          </h2>
          {accounts?.data?.length ? (
          <div className="flex flex-wrap gap-6">
            {accounts.data.map((a: Account) => (
              <BankCard 
                key={a.id || a.appwriteItemId}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
          </div>
          ) : (
            <div className="glass-card flex max-w-lg flex-col gap-4 p-8">
              <p className="text-16 font-medium text-gray-800">No banks linked yet</p>
              <p className="text-14 text-gray-500">Connect a bank account to see your cards here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MyBanks
