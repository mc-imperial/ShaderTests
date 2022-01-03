#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float nb_mod(float ref)
{
 for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
  {
   _GLF_global_loop_count ++;
  }
 return 1.0;
}
void main()
{
 nb_mod(1.0);
}
