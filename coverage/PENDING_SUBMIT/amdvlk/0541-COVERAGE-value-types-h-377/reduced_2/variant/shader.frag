#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct _GLF_struct_18 {
 int i;
} ;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i += 1)
  {
   _GLF_global_loop_count ++;
   int from = 1;
   from = i;
   {
    int from = from;
    int k = 1, i = 1;
    i = from;
    while((i < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
     {
      _GLF_global_loop_count ++;
      temp[k ++] = data[i ++];
     }
    _GLF_struct_18 _GLF_struct_replacement_18 = _GLF_struct_18(1);
    data[_GLF_struct_replacement_18.i] = temp[1];
   }
  }
}
