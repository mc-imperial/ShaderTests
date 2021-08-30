#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

mat4x3 m43 = mat4x3(1.0);

void main()
{
 int c = 1;
 int r = 1;
 m43[c][r] = 1.0;
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int _GLF_SPLIT_LOOP_COUNTERc = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); _GLF_SPLIT_LOOP_COUNTERc ++)
  {
   _GLF_global_loop_count ++;
   sums[7] += m43[_GLF_SPLIT_LOOP_COUNTERc][1];
  }
 int _GLF_SPLIT_LOOP_COUNTERc = 1;
 _GLF_SPLIT_LOOP_COUNTERc = 4;
 sums[7] += m43[_GLF_SPLIT_LOOP_COUNTERc][1];
}
