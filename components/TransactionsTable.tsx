import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
   } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
   
  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
    </div>
  )
} 

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  if (!transactions?.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
        <p className="text-16 font-medium text-gray-700">No transactions yet</p>
        <p className="mt-1 text-14 text-gray-500">Activity will appear here once your account syncs.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
    <Table>
      <TableHeader className="bg-gray-50/80">
        <TableRow className="border-gray-100 hover:bg-transparent">
          <TableHead className="px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Transaction</TableHead>
          <TableHead className="px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Amount</TableHead>
          <TableHead className="px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Status</TableHead>
          <TableHead className="px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Date</TableHead>
          <TableHead className="max-md:hidden px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Channel</TableHead>
          <TableHead className="max-md:hidden px-4 text-12 font-semibold uppercase tracking-wide text-gray-500">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date))
          const amount = formatAmount(t.amount)

          const isDebit = t.type === 'debit';
          const isCredit = t.type === 'credit';

          return (
            <TableRow key={t.id} className={`border-gray-50 transition-colors hover:bg-gray-50/50 ${isDebit || amount[0] === '-' ? 'bg-red-50/30' : 'bg-emerald-50/30'}`}>
              <TableCell className="max-w-[250px] px-4 py-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-14 truncate font-semibold text-gray-800">
                    {removeSpecialCharacters(t.name)}
                  </h1>
                </div>
              </TableCell>

              <TableCell className={`px-4 py-4 font-semibold ${
                isDebit || amount[0] === '-' ?
                  'text-red-600'
                  : 'text-emerald-600'
              }`}>
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              <TableCell className="px-4 py-4">
                <CategoryBadge category={status} /> 
              </TableCell>

              <TableCell className="min-w-32 px-4 py-4 text-gray-600">
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>

              <TableCell className="min-w-24 px-4 py-4 capitalize text-gray-600 max-md:hidden">
               {t.paymentChannel}
              </TableCell>

              <TableCell className="max-md:hidden px-4 py-4">
               <CategoryBadge category={t.category} /> 
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
    </div>
  )
}

export default TransactionsTable