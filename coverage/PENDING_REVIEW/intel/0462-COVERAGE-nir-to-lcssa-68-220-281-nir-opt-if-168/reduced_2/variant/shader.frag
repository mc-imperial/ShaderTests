#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float nb_mod()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   return 1.0;
  }
 return 1.0;
}
void main()
{
 do
  {
   _GLF_global_loop_count ++;
   if(false)
    {
     return;
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 nb_mod();
}
