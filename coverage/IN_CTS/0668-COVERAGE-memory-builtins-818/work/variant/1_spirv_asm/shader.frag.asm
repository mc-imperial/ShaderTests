; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 187
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %168
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "arr"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %87 "i"
               OpName %111 "i"
               OpName %168 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %168 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 32
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Function %12
         %15 = OpConstant %10 5
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypePointer Uniform %6
         %86 = OpTypePointer Function %6
         %96 = OpConstant %6 10
         %97 = OpTypeBool
        %100 = OpConstant %6 1
        %104 = OpConstant %6 3
        %120 = OpConstant %6 4
        %149 = OpConstant %6 2
        %165 = OpTypeFloat 32
        %166 = OpTypeVector %165 4
        %167 = OpTypePointer Output %166
        %168 = OpVariable %167 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpVariable %13 Function
         %87 = OpVariable %86 Function
        %111 = OpVariable %86 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %19 %9 %9
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %19 %9 %9
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %19 %9 %9
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %20 %19 %9 %9
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %20 %19 %9 %9
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %20 %19 %9 %9
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %20 %19 %9 %9
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %20 %19 %9 %9
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %20 %19 %9 %9
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %20 %19 %9 %9
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %20 %19 %9 %9
         %42 = OpLoad %6 %41
         %43 = OpAccessChain %20 %19 %9 %9
         %44 = OpLoad %6 %43
         %45 = OpAccessChain %20 %19 %9 %9
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %20 %19 %9 %9
         %48 = OpLoad %6 %47
         %49 = OpAccessChain %20 %19 %9 %9
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %20 %19 %9 %9
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %20 %19 %9 %9
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %20 %19 %9 %9
         %56 = OpLoad %6 %55
         %57 = OpAccessChain %20 %19 %9 %9
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %20 %19 %9 %9
         %60 = OpLoad %6 %59
         %61 = OpAccessChain %20 %19 %9 %9
         %62 = OpLoad %6 %61
         %63 = OpAccessChain %20 %19 %9 %9
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %20 %19 %9 %9
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %20 %19 %9 %9
         %68 = OpLoad %6 %67
         %69 = OpAccessChain %20 %19 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %20 %19 %9 %9
         %72 = OpLoad %6 %71
         %73 = OpAccessChain %20 %19 %9 %9
         %74 = OpLoad %6 %73
         %75 = OpAccessChain %20 %19 %9 %9
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %20 %19 %9 %9
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %20 %19 %9 %9
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %20 %19 %9 %9
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %20 %19 %9 %9
         %84 = OpLoad %6 %83
         %85 = OpCompositeConstruct %12 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40 %42 %44 %46 %48 %50 %52 %54 %56 %58 %60 %62 %64 %66 %68 %70 %72 %74 %76 %78 %80 %82 %84
               OpStore %14 %85
         %88 = OpAccessChain %20 %19 %9 %9
         %89 = OpLoad %6 %88
               OpStore %87 %89
               OpBranch %90
         %90 = OpLabel
               OpLoopMerge %92 %93 None
               OpBranch %94
         %94 = OpLabel
         %95 = OpLoad %6 %8
         %98 = OpSLessThan %97 %95 %96
               OpBranchConditional %98 %91 %92
         %91 = OpLabel
         %99 = OpLoad %6 %8
        %101 = OpIAdd %6 %99 %100
               OpStore %8 %101
        %102 = OpAccessChain %20 %19 %9 %9
        %103 = OpLoad %6 %102
        %105 = OpAccessChain %20 %19 %9 %104
        %106 = OpLoad %6 %105
        %107 = OpSGreaterThan %97 %103 %106
               OpSelectionMerge %109 None
               OpBranchConditional %107 %108 %109
        %108 = OpLabel
               OpBranch %92
        %109 = OpLabel
               OpBranch %93
         %93 = OpLabel
               OpBranch %90
         %92 = OpLabel
        %112 = OpAccessChain %20 %19 %9 %9
        %113 = OpLoad %6 %112
               OpStore %111 %113
               OpBranch %114
        %114 = OpLabel
               OpLoopMerge %116 %117 None
               OpBranch %118
        %118 = OpLabel
        %119 = OpLoad %6 %111
        %121 = OpAccessChain %20 %19 %9 %120
        %122 = OpLoad %6 %121
        %123 = OpSLessThan %97 %119 %122
        %124 = OpLoad %6 %8
        %125 = OpSLessThan %97 %124 %96
        %126 = OpLogicalAnd %97 %123 %125
               OpBranchConditional %126 %115 %116
        %115 = OpLabel
        %127 = OpLoad %6 %8
        %128 = OpIAdd %6 %127 %100
               OpStore %8 %128
        %129 = OpLoad %6 %111
        %130 = OpLoad %6 %111
        %131 = OpAccessChain %20 %19 %9 %9
        %132 = OpLoad %6 %131
        %133 = OpAccessChain %20 %19 %9 %104
        %134 = OpLoad %6 %133
        %135 = OpShiftRightArithmetic %6 %132 %134
        %136 = OpISub %6 %130 %135
        %137 = OpAccessChain %86 %14 %136
        %138 = OpLoad %6 %137
        %139 = OpAccessChain %86 %14 %129
        %140 = OpLoad %6 %139
        %141 = OpIAdd %6 %140 %138
        %142 = OpAccessChain %86 %14 %129
               OpStore %142 %141
               OpBranch %117
        %117 = OpLabel
        %143 = OpLoad %6 %111
        %144 = OpIAdd %6 %143 %100
               OpStore %111 %144
               OpBranch %114
        %116 = OpLabel
        %145 = OpAccessChain %20 %19 %9 %100
        %146 = OpLoad %6 %145
        %147 = OpAccessChain %86 %14 %146
        %148 = OpLoad %6 %147
        %150 = OpAccessChain %20 %19 %9 %149
        %151 = OpLoad %6 %150
        %152 = OpIEqual %97 %148 %151
               OpSelectionMerge %154 None
               OpBranchConditional %152 %153 %154
        %153 = OpLabel
        %155 = OpAccessChain %20 %19 %9 %149
        %156 = OpLoad %6 %155
        %157 = OpAccessChain %86 %14 %156
        %158 = OpLoad %6 %157
        %159 = OpAccessChain %20 %19 %9 %9
        %160 = OpLoad %6 %159
        %161 = OpIEqual %97 %158 %160
               OpBranch %154
        %154 = OpLabel
        %162 = OpPhi %97 %152 %116 %161 %153
               OpSelectionMerge %164 None
               OpBranchConditional %162 %163 %182
        %163 = OpLabel
        %169 = OpAccessChain %20 %19 %9 %9
        %170 = OpLoad %6 %169
        %171 = OpConvertSToF %165 %170
        %172 = OpAccessChain %20 %19 %9 %104
        %173 = OpLoad %6 %172
        %174 = OpConvertSToF %165 %173
        %175 = OpAccessChain %20 %19 %9 %104
        %176 = OpLoad %6 %175
        %177 = OpConvertSToF %165 %176
        %178 = OpAccessChain %20 %19 %9 %9
        %179 = OpLoad %6 %178
        %180 = OpConvertSToF %165 %179
        %181 = OpCompositeConstruct %166 %171 %174 %177 %180
               OpStore %168 %181
               OpBranch %164
        %182 = OpLabel
        %183 = OpAccessChain %20 %19 %9 %104
        %184 = OpLoad %6 %183
        %185 = OpConvertSToF %165 %184
        %186 = OpCompositeConstruct %166 %185 %185 %185 %185
               OpStore %168 %186
               OpBranch %164
        %164 = OpLabel
               OpReturn
               OpFunctionEnd
