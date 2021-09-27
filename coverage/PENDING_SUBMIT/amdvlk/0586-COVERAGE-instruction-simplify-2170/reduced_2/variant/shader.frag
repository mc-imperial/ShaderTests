#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.y < 0.0)
      {
       continue;
      }
     do
      {
       if(gl_FragCoord.y < 0.0)
        {
         return;
        }
      }
     while(false);
    }
  }
}
