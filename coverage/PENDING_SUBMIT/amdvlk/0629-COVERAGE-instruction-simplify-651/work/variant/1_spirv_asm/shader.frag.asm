; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 174
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %118
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %6 "func("
               OpName %10 "_GLF_global_loop_count"
               OpName %16 "arr"
               OpName %20 "b"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %29 "i"
               OpName %48 "c"
               OpName %51 "j"
               OpName %89 "a"
               OpName %91 "i"
               OpName %118 "_GLF_color"
               OpName %133 "ref"
               OpName %146 "i"
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %118 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %8 = OpTypeInt 32 1
          %9 = OpTypePointer Private %8
         %10 = OpVariable %9 Private
         %11 = OpConstant %8 0
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 5
         %14 = OpTypeArray %8 %13
         %15 = OpTypePointer Private %14
         %16 = OpVariable %15 Private
         %17 = OpConstant %8 1
         %18 = OpConstantComposite %14 %17 %17 %17 %17 %17
         %19 = OpTypePointer Function %8
         %21 = OpConstant %12 4
         %22 = OpTypeArray %8 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypePointer Uniform %8
         %36 = OpConstant %8 10
         %37 = OpTypeBool
         %43 = OpConstant %8 2
         %90 = OpConstant %8 5
         %98 = OpConstant %8 4
        %107 = OpConstant %8 7
        %115 = OpTypeFloat 32
        %116 = OpTypeVector %115 4
        %117 = OpTypePointer Output %116
        %118 = OpVariable %117 Output
        %132 = OpTypePointer Function %14
        %155 = OpConstant %8 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %89 = OpVariable %19 Function
         %91 = OpVariable %19 Function
        %133 = OpVariable %132 Function
        %146 = OpVariable %19 Function
               OpStore %10 %11
               OpStore %16 %18
         %79 = OpFunctionCall %2 %6
               OpBranch %80
         %80 = OpLabel
               OpLoopMerge %82 %83 None
               OpBranch %84
         %84 = OpLabel
         %85 = OpLoad %8 %10
         %86 = OpSLessThan %37 %85 %36
               OpBranchConditional %86 %81 %82
         %81 = OpLabel
         %87 = OpLoad %8 %10
         %88 = OpIAdd %8 %87 %17
               OpStore %10 %88
               OpStore %89 %90
               OpStore %91 %17
               OpBranch %92
         %92 = OpLabel
               OpLoopMerge %94 %95 None
               OpBranch %96
         %96 = OpLabel
         %97 = OpLoad %8 %91
         %99 = OpSLessThan %37 %97 %98
        %100 = OpLoad %8 %10
        %101 = OpSLessThan %37 %100 %36
        %102 = OpLogicalAnd %37 %99 %101
               OpBranchConditional %102 %93 %94
         %93 = OpLabel
        %103 = OpLoad %8 %10
        %104 = OpIAdd %8 %103 %17
               OpStore %10 %104
        %105 = OpLoad %8 %89
        %106 = OpIAdd %8 %105 %17
               OpStore %89 %106
        %108 = OpSGreaterThan %37 %105 %107
               OpSelectionMerge %110 None
               OpBranchConditional %108 %109 %110
        %109 = OpLabel
        %111 = OpFunctionCall %2 %6
               OpBranch %94
        %110 = OpLabel
               OpBranch %95
         %95 = OpLabel
        %113 = OpLoad %8 %91
        %114 = OpIAdd %8 %113 %17
               OpStore %91 %114
               OpBranch %92
         %94 = OpLabel
               OpBranch %83
         %83 = OpLabel
               OpBranch %80
         %82 = OpLabel
        %119 = OpAccessChain %26 %25 %11 %11
        %120 = OpLoad %8 %119
        %121 = OpConvertSToF %115 %120
        %122 = OpAccessChain %26 %25 %11 %17
        %123 = OpLoad %8 %122
        %124 = OpConvertSToF %115 %123
        %125 = OpAccessChain %26 %25 %11 %17
        %126 = OpLoad %8 %125
        %127 = OpConvertSToF %115 %126
        %128 = OpAccessChain %26 %25 %11 %11
        %129 = OpLoad %8 %128
        %130 = OpConvertSToF %115 %129
        %131 = OpCompositeConstruct %116 %121 %124 %127 %130
               OpStore %118 %131
        %134 = OpAccessChain %26 %25 %11 %11
        %135 = OpLoad %8 %134
        %136 = OpSNegate %8 %135
        %137 = OpAccessChain %26 %25 %11 %17
        %138 = OpLoad %8 %137
        %139 = OpAccessChain %26 %25 %11 %11
        %140 = OpLoad %8 %139
        %141 = OpAccessChain %26 %25 %11 %11
        %142 = OpLoad %8 %141
        %143 = OpAccessChain %26 %25 %11 %11
        %144 = OpLoad %8 %143
        %145 = OpCompositeConstruct %14 %136 %138 %140 %142 %144
               OpStore %133 %145
        %147 = OpAccessChain %26 %25 %11 %17
        %148 = OpLoad %8 %147
               OpStore %146 %148
               OpBranch %149
        %149 = OpLabel
               OpLoopMerge %151 %152 None
               OpBranch %153
        %153 = OpLabel
        %154 = OpLoad %8 %146
        %156 = OpAccessChain %26 %25 %11 %155
        %157 = OpLoad %8 %156
        %158 = OpSLessThan %37 %154 %157
               OpBranchConditional %158 %150 %151
        %150 = OpLabel
        %159 = OpLoad %8 %146
        %160 = OpAccessChain %9 %16 %159
        %161 = OpLoad %8 %160
        %162 = OpLoad %8 %146
        %163 = OpAccessChain %19 %133 %162
        %164 = OpLoad %8 %163
        %165 = OpINotEqual %37 %161 %164
               OpSelectionMerge %167 None
               OpBranchConditional %165 %166 %167
        %166 = OpLabel
        %168 = OpAccessChain %26 %25 %11 %17
        %169 = OpLoad %8 %168
        %170 = OpConvertSToF %115 %169
        %171 = OpCompositeConstruct %116 %170 %170 %170 %170
               OpStore %118 %171
               OpBranch %167
        %167 = OpLabel
               OpBranch %152
        %152 = OpLabel
        %172 = OpLoad %8 %146
        %173 = OpIAdd %8 %172 %17
               OpStore %146 %173
               OpBranch %149
        %151 = OpLabel
               OpReturn
               OpFunctionEnd
          %6 = OpFunction %2 None %3
          %7 = OpLabel
         %20 = OpVariable %19 Function
         %29 = OpVariable %19 Function
         %48 = OpVariable %19 Function
         %51 = OpVariable %19 Function
         %27 = OpAccessChain %26 %25 %11 %17
         %28 = OpLoad %8 %27
               OpStore %20 %28
               OpStore %29 %11
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %8 %10
         %38 = OpSLessThan %37 %35 %36
               OpBranchConditional %38 %31 %32
         %31 = OpLabel
         %39 = OpLoad %8 %10
         %40 = OpIAdd %8 %39 %17
               OpStore %10 %40
         %41 = OpLoad %8 %20
         %42 = OpIAdd %8 %41 %17
               OpStore %20 %42
         %44 = OpSGreaterThan %37 %42 %43
               OpSelectionMerge %46 None
               OpBranchConditional %44 %45 %46
         %45 = OpLabel
               OpBranch %32
         %46 = OpLabel
         %49 = OpAccessChain %26 %25 %11 %17
         %50 = OpLoad %8 %49
               OpStore %48 %50
         %52 = OpAccessChain %26 %25 %11 %17
         %53 = OpLoad %8 %52
               OpStore %51 %53
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %8 %10
         %60 = OpSLessThan %37 %59 %36
               OpBranchConditional %60 %55 %56
         %55 = OpLabel
         %61 = OpLoad %8 %10
         %62 = OpIAdd %8 %61 %17
               OpStore %10 %62
         %63 = OpLoad %8 %48
         %64 = OpIAdd %8 %63 %17
               OpStore %48 %64
         %65 = OpAccessChain %26 %25 %11 %43
         %66 = OpLoad %8 %65
         %67 = OpSGreaterThan %37 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
               OpBranch %56
         %69 = OpLabel
         %71 = OpLoad %8 %51
         %72 = OpLoad %8 %29
         %73 = OpIAdd %8 %71 %72
         %74 = OpLoad %8 %29
         %75 = OpISub %8 %74 %17
         %76 = OpAccessChain %9 %16 %73
               OpStore %76 %75
               OpBranch %57
         %57 = OpLabel
               OpBranch %54
         %56 = OpLabel
               OpBranch %33
         %33 = OpLabel
         %77 = OpLoad %8 %29
         %78 = OpIAdd %8 %77 %17
               OpStore %29 %78
               OpBranch %30
         %32 = OpLabel
               OpReturn
               OpFunctionEnd
