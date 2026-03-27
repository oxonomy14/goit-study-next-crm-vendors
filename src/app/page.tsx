import css from './page.module.css';
import ActiveLabel from '@/app/components/active-label';
import NotActiveLabel from '@/app/components/not-active-label';
import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      {/*   <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel> */}
      {/*    <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
    </main>
  );
}
