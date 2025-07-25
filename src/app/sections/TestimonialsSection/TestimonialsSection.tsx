import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { ApiResult } from '@/services/api';
import type { HomePageData } from '@/services/home';

type TestimonialsSectionProps = {
  homepageData: ApiResult<HomePageData> | null;
};

export const TestimonialsSection = ({
  homepageData,
}: TestimonialsSectionProps) => {
  const testimonials = [
    {
      quote:
        homepageData?.data?.infosTestimony?.[0]?.leftFeedback?.[0]?.feedback ||
        '',
      name:
        homepageData?.data?.infosTestimony?.[0]?.leftFeedback?.[0]?.name || '',
      position:
        homepageData?.data?.infosTestimony?.[0]?.leftFeedback?.[0]?.post || '',
      image:
        homepageData?.data?.infosTestimony?.[0]?.leftFeedback?.[0]?.image
          ?.formats?.thumbnail?.url || null,
    },
    {
      quote:
        homepageData?.data?.infosTestimony?.[0]?.centerFeedback?.feedback || '',
      name: homepageData?.data?.infosTestimony?.[0]?.centerFeedback?.name || '',
      position:
        homepageData?.data?.infosTestimony?.[0]?.centerFeedback?.post || '',
      image:
        homepageData?.data?.infosTestimony?.[0]?.centerFeedback?.image?.formats
          ?.thumbnail?.url || null,
    },
    {
      quote:
        homepageData?.data?.infosTestimony?.[0]?.rightFeedback?.feedback || '',
      name: homepageData?.data?.infosTestimony?.[0]?.rightFeedback?.name || '',
      position:
        homepageData?.data?.infosTestimony?.[0]?.rightFeedback?.post || '',
      image:
        homepageData?.data?.infosTestimony?.[0]?.rightFeedback?.image?.formats
          ?.thumbnail?.url || null,
    },
  ];

  return (
    <section className='flex flex-col items-center gap-16 py-8 px-[30px] relative w-full bg-color-bg'>
      <div
        className='flex w-full max-w-[1440px] items-center justify-center gap-[78px] relative'
        style={{ zIndex: 13 }}
      >
        <div className='flex flex-col items-center justify-center relative w-full'>
          <header className='flex flex-col items-start gap-6 pt-[60px] pb-[50px] px-0 relative w-full'>
            <h2 className='relative w-full font-h1 font-[number:var(--h1-font-weight)] text-dark-blue text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]'>
              {homepageData?.data?.infosTestimony?.[0]?.title || ''}
            </h2>

            <p className='relative w-full font-body-big font-[number:var(--body-big-font-weight)] text-grey text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] [font-style:var(--body-big-font-style)]'>
              {homepageData?.data?.infosTestimony?.[0]?.description || ''}
            </p>
          </header>

          <div className='flex flex-col items-center justify-center px-2 py-0 relative w-full h-auto sm:px-4 md:px-8'>
            <div className='flex flex-col items-center gap-6 w-full md:flex-row md:justify-center md:items-stretch'>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`testimonial-${index}`}
                  className='flex flex-col items-start gap-4 p-6 w-full max-w-xs md:w-[416px] bg-white rounded-xl overflow-hidden shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]'
                >
                  <CardContent className='relative self-stretch w-full h-auto p-0 pr-0'>
                    <div className="absolute w-[11px] top-0 left-0 opacity-30 text-blue text-[70px] leading-[76px] whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-bold tracking-[0]">
                      &#34;
                    </div>
                    <div className="relative pt-6 pl-6 pr-6 [font-family:'DM_Sans',Helvetica] font-normal italic text-grey text-lg tracking-[0] leading-[29.2px]">
                      {testimonial.quote}
                    </div>
                  </CardContent>
                  <div className='flex items-center gap-4 relative self-stretch w-full mt-auto'>
                    <Avatar className='relative w-16 h-16 bg-white rounded-full overflow-hidden border-2 border-solid border-[#ffffff] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]'>
                      {testimonial.image && (
                        <AvatarImage
                          className='w-16 h-16 object-cover'
                          alt={`Photo of ${testimonial.name}`}
                          src={testimonial.image}
                        />
                      )}
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col items-start relative flex-1 grow'>
                      <div className='relative self-stretch mt-[-1.00px] font-body-bold-medium font-[number:var(--body-bold-medium-font-weight)] text-dark-blue text-[length:var(--body-bold-medium-font-size)] tracking-[var(--body-bold-medium-letter-spacing)] leading-[var(--body-bold-medium-line-height)] [font-style:var(--body-bold-medium-font-style)]'>
                        {testimonial.name}
                      </div>
                      <div className='relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-grey text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]'>
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className='inline-flex flex-col items-start gap-2.5 py-10'>
            <Button
              variant='outline'
              className='inline-flex items-center justify-center gap-2.5 px-16 py-2.5 rounded-md border-2 border-solid border-[#5dc2e4] bg-transparent'
            >
              <span className='relative w-fit mt-[-2.00px] font-body-big font-[number:var(--body-big-font-weight)] text-blue text-[length:var(--body-big-font-size)] text-center tracking-[var(--body-big-letter-spacing)] leading-[var(--body-big-line-height)] whitespace-nowrap [font-style:var(--body-big-font-style)]'>
                Voir tout
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
