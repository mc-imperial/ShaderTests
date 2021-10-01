#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 for(int _injected_loop_counter = 1; ((1 | _injected_loop_counter) < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
  {
   _GLF_global_loop_count ++;
  }
}
