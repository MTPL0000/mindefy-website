import dynamic from 'next/dynamic';
import Image from 'next/image';
import preloader from '../../../public/images/preloader.gif';

// Utility function to create lazy-loaded service components
export function createLazyServiceComponent(componentPath, options = {}) {
  return dynamic(() => {
    // Add artificial delay in development to see the loader
    const importPromise = import(`../components/${componentPath}`);
    if (process.env.NODE_ENV === 'development') {
      return new Promise(resolve => {
        setTimeout(() => {
          importPromise.then(resolve);
        }, 2000); // 2 second delay in development
      });
    }
    return importPromise;
  }, {
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={preloader}
            alt="Loading..."
            width={250}
            height={188}
            className="w-16 h-12 sm:w-20 sm:h-15 md:w-24 md:h-18 lg:w-32 lg:h-24 xl:w-40 xl:h-30 2xl:w-48 2xl:h-36 object-contain"
            priority
          />
        </div>
      </div>
    ),
    ssr: true, // Keep SSR for SEO
    ...options,
  });
}

// Pre-defined lazy components for common services
export const LazyAAD = createLazyServiceComponent('AAD');
export const LazyIOS = createLazyServiceComponent('IOS');
export const LazyHAD = createLazyServiceComponent('HAD');
export const LazyMeanMern = createLazyServiceComponent('MeanMern');
export const LazyWebApp = createLazyServiceComponent('WebApp');
export const LazyAgileRapid = createLazyServiceComponent('AgileRapid');
export const LazySAS = createLazyServiceComponent('SAS');
export const LazyITC = createLazyServiceComponent('ITC');
export const LazyDigitalTransformation = createLazyServiceComponent('DigitalTransformation');
export const LazyMicroservices = createLazyServiceComponent('Microservices');
export const LazyLowCode = createLazyServiceComponent('LowCode');
export const LazyTestAutomation = createLazyServiceComponent('TestAutomation');
export const LazyCRMSolutions = createLazyServiceComponent('CRMSolutions');
export const LazyEcommerce = createLazyServiceComponent('Ecommerce');
export const LazyEnterpriseSolutions = createLazyServiceComponent('EnterpriseSolutions');
export const LazyStartupConsulting = createLazyServiceComponent('StartupConsulting');
export const LazyStartupIncubationConsulting = createLazyServiceComponent('StartupIncubationConsulting');
export const LazyWhiteLabel = createLazyServiceComponent('WhiteLabel');
export const LazyMVPDevelopment = createLazyServiceComponent('MVPDevelopment');
export const LazyMindfulUX = createLazyServiceComponent('MindfulUX'); 