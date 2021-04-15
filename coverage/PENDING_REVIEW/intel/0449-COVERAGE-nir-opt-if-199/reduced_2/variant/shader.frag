#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 switch(1)
  {
   case 25:
   if(true)
    {
     return;
    }
   case 99:
   if(true)
    {
     if(false)
      {
       do
        {
         _GLF_global_loop_count ++;
         if(false)
          {
           break;
          }
         if(true)
          {
           return;
          }
         else
          {
          }
        }
       while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
      }
    }
  }
}
