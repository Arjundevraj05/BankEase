"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { Loader2 } from "lucide-react";
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';
import LoadingScreen from './LoadingScreen';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectError, setConnectError] = useState<string | null>(null);

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    setIsConnecting(true);
    setConnectError(null);

    try {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push('/connecting');
    } catch (error) {
      console.error(error);
      setConnectError('We could not finish linking your bank. Please try again.');
      setIsConnecting(false);
    }
  }, [user, router])
  
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);

  if (isConnecting) {
    return (
      <LoadingScreen
        title="Linking your bank account"
        message="Securing your connection and saving account details..."
        steps={[
          "Verifying with Plaid",
          "Creating payment profile",
          "Saving bank details",
        ]}
        activeStep={1}
      />
    );
  }
  
  return (
    <div className="flex flex-col gap-2">
      {connectError && (
        <p className="text-14 text-red-600">{connectError}</p>
      )}
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          {!ready ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Preparing bank link...
            </>
          ) : (
            "Connect bank"
          )}
        </Button>
      ): variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost" disabled={!ready}>
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='hidden text-16 font-semibold text-black-2 xl:block'>
            {!ready ? "Preparing..." : "Connect bank"}
          </p>
        </Button>
      ): (
        <Button onClick={() => open()} className="plaidlink-default" disabled={!ready}>
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='text-16 font-semibold text-black-2'>
            {!ready ? "Preparing..." : "Connect bank"}
          </p>
        </Button>
      )}
    </div>
  )
}

export default PlaidLink
