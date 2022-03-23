#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 for(int GLF_dead3i = 1; (GLF_dead3i <= min(2, findMSB(1))) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_dead3i ++)
  {
   _GLF_global_loop_count ++;
  }
}
