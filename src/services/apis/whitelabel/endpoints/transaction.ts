import { whitelabelAPI } from '..';

export interface ApprovalHierarchy {
  _id: string;
  minValue: number;
  minApprovers: number;
}

export interface Transaction {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  customId: string;
  createdBy: string;
  appClientId: string;
  accountNumber: number;
  transactionType: string;
  approvalHierarchy: ApprovalHierarchy;
  orderStatus: string;
  approversStatus: any[];
}

export interface FindOptions {
  page: number;
  perPage: number;
}

const transaction = whitelabelAPI.injectEndpoints({
  endpoints: (build) => ({
    list: build.query<{ data: Transaction[] }, FindOptions>({
      query: ({ page, perPage }) => ({
        url: `/transaction?page=${page}&perPage=${perPage}`,
        // headers: {
        //   Authorization:
        //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUzMGNiOGFlNWQ3YzAwMTExNzA0OWUiLCJjdXN0b21JZCI6IjEwNTAzOTU2MDAwMTYwXzg4SSIsInVuaXF1ZUtleSI6IjEwNTAzOTU2MDAwMTYwXzEwNTAzOTU2MDAwMTYwXzg4SSIsIm5hbWUiOiJBZ3JhdHRvIiwib3JpZ2luQWNjb3VudE51bWJlciI6MjMwOTYyNiwib3JpZ2luRGlnaXRBY2NvdW50Ijo3LCJkb2N1bWVudCI6IjEwNTAzOTU2MDAwMTYwIiwicHJvZmlsZSI6IkFETUlOSVNUUkFET1IiLCJwZXJtaXNzaW9ucyI6WyJGSUxFX01PREVMIiwiRklMRV9UUkFOU01JU1NJT05fQ05BQiIsIkZJTEVfVFJBTlNNSVNTSU9OX1RFRF9CT0xFVE8iLCJGSUxFX1RSQU5TTUlTU0lPTl9QSVgiLCJHRVRfT1JERVJTIiwiUkVDRUlWRV9SRVRVUk5fRklMRSIsIkFQUFJPVkVfREVOWSIsIkdFVF9SRUNFSVBUIiwiTUFOQUdFX1VTRVJTIl0sImlzQXBwcm92ZXIiOnRydWUsImlhdCI6MTY0MTQyMDczNiwiZXhwIjoxNjQxNDI5NzM2fQ.0pHj8XekkQJC7SkyvU8Ne_tOO8r8Bis-CNtxtl_kLoY',
        // },
        refetchOnFocus: true,
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useListQuery: useListTransactionsQuery } = transaction;
