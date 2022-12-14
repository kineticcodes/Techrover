import { Menu, Transition } from '@headlessui/react';
import {
  CheckIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  FilterIcon,
  GlobeIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import { Fragment, useEffect, useState } from 'react';

import Sidebar from '@/components/Sidebar';
import { GetAllProperties } from '@/services/properties';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export type PROPERTY_TYPE = {
  applicant: {
    name: string;
    email: string;
    address1: string;
    imageUrl: string;
  };
  date: string;
  dateFull: string;
  stage: string;
  href: string;
  dashboardHref: string;
  status: string;
};

export default function AllProperties() {
  const [applications, setApplications] = useState<PROPERTY_TYPE[]>([]);

  useEffect(() => {
    (async () => {
      const response = await GetAllProperties();
      const newApplicationList: PROPERTY_TYPE[] = [];
      response.data?.forEach((property: any) => {
        newApplicationList.push({
          applicant: {
            name: property.appEnglishName,
            email: 'ricardo.cooper@example.com',
            address1: property.appAddress1,
            imageUrl:
              'https://img.etimg.com/thumb/msid-90724647,width-300,imgsize-28786,,resizemode-4,quality-100/indian-hotels.jpg',
          },
          date: '2020-01-07',
          dateFull: 'January 7, 2020',
          stage: 'Completed phone screening',
          href: `/properties/${property.appProId}/settings`,
          dashboardHref: `/properties/${property.appProId}/dashboard`,
          status: property.appPropertyCode,
        });
      });
      setApplications(newApplicationList);
    })();
  }, []);

  return (
    <Sidebar activePath="/properties">
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Properties</h1>
            <div className="p-3">
              <a href="\create">
                <span className="relative z-0 inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <PlusIcon
                      className="mr-2 -ml-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    New property
                  </button>
                </span>
              </a>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <FilterIcon
                      className="mr-2 -ml-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Filter
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md p-2 text-sm`}
                          >
                            {active ? (
                              <CheckIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <CheckIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Status
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md p-2 text-sm`}
                          >
                            {active ? (
                              <GlobeIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <GlobeIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Country
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md p-2 text-sm`}
                          >
                            Show archived properties
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <div className="divide-y divide-gray-200">
                  <div className="flex items-center p-4 sm:px-6">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="shrink-0">
                        {/* <img className="w-12 h-12 rounded-full" alt="" /> */}
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-med text-gray-900">Property</p>
                        </div>
                        <div
                          className="hidden md:block"
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <div>
                            <p className="text-med text-gray-900">Status</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="divide-y divide-gray-200">
                      {applications.map((application, index) => (
                        <li key={index}>
                          <a
                            href={application.dashboardHref}
                            className="block hover:bg-gray-50"
                          >
                            <div className="flex items-center p-4 sm:px-6">
                              <div className="flex min-w-0 flex-1 items-center">
                                <div className="shrink-0">
                                  <img
                                    className="h-12 w-12 rounded-full"
                                    src={application.applicant.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                  <div>
                                    <p className="truncate text-sm font-medium text-indigo-600">
                                      {application.applicant.name}
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                      {/* <MailIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                      <span className="truncate">
                                        {application.applicant.address1}
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    className="hidden md:block"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <div>
                                      <p className="text-sm text-gray-900">
                                        <span className="truncate">
                                          {application.status}
                                        </span>
                                      </p>
                                      {/* <p className="flex items-center mt-2 text-sm text-gray-500">
                                        <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                        {application.stage}
                                      </p> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Menu as="div" className="relative ml-3">
                                  {({ open }) => (
                                    <>
                                      <div className="p-3">
                                        <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                                          <span className="sr-only">
                                            View notifications
                                          </span>
                                          <DotsVerticalIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                          />
                                        </Menu.Button>
                                      </div>
                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                      >
                                        <Menu.Items
                                          static
                                          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                          <Menu.Item>
                                            {({ active }) => (
                                              <a
                                                href={application.href}
                                                className={classNames(
                                                  active ? 'bg-gray-100' : '',
                                                  'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                              >
                                                Settings
                                              </a>
                                            )}
                                          </Menu.Item>
                                        </Menu.Items>
                                      </Transition>
                                    </>
                                  )}
                                </Menu>
                                <ChevronRightIcon
                                  className="h-5 w-5 text-black"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" alt="" />
                  </div>
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm text-gray-900">Property</p>
                    </div>
                    <div className="hidden md:block" style={{display:'flex',alignItems:'center'}}>
                      <div >
                        <p className="text-sm text-gray-900" >
                        Status
                        </p>
                      </div>
                    </div>
                  </div>
                            
                </div> */}
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </Sidebar>
  );
}
