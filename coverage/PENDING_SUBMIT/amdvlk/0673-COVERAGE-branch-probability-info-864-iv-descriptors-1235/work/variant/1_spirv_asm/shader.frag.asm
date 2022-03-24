; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 166
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %147
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "arr0"
               OpName %16 "arr1"
               OpName %20 "j"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_int_values"
               OpName %25 ""
               OpName %49 "i0"
               OpName %62 "i1"
               OpName %76 "i2"
               OpName %147 "_GLF_color"
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %147 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 10
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstantComposite %12 %9 %9 %9 %9 %9 %9 %9 %9 %9 %9
         %16 = OpVariable %13 Private
         %17 = OpConstant %6 1
         %18 = OpConstantComposite %12 %17 %17 %17 %17 %17 %17 %17 %17 %17 %17
         %19 = OpTypePointer Function %6
         %21 = OpConstant %10 4
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpTypePointer Uniform %6
         %35 = OpConstant %6 2
         %38 = OpTypeBool
         %58 = OpConstant %6 15
         %69 = OpConstant %6 10
        %100 = OpConstant %6 3
        %144 = OpTypeFloat 32
        %145 = OpTypeVector %144 4
        %146 = OpTypePointer Output %145
        %147 = OpVariable %146 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %20 = OpVariable %19 Function
         %49 = OpVariable %19 Function
         %62 = OpVariable %19 Function
         %76 = OpVariable %19 Function
               OpStore %8 %9
               OpStore %14 %15
               OpStore %16 %18
         %27 = OpAccessChain %26 %25 %9 %9
         %28 = OpLoad %6 %27
               OpStore %20 %28
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %6 %20
         %36 = OpAccessChain %26 %25 %9 %35
         %37 = OpLoad %6 %36
         %39 = OpSLessThan %38 %34 %37
               OpBranchConditional %39 %30 %31
         %30 = OpLabel
         %40 = OpLoad %6 %8
         %41 = OpIAdd %6 %40 %17
               OpStore %8 %41
         %42 = OpLoad %6 %20
         %43 = OpLoad %6 %20
         %44 = OpAccessChain %7 %14 %43
         %45 = OpLoad %6 %44
         %46 = OpAccessChain %7 %16 %42
               OpStore %46 %45
               OpBranch %32
         %32 = OpLabel
         %47 = OpLoad %6 %20
         %48 = OpIAdd %6 %47 %17
               OpStore %20 %48
               OpBranch %29
         %31 = OpLabel
         %50 = OpAccessChain %26 %25 %9 %9
         %51 = OpLoad %6 %50
               OpStore %49 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %6 %8
         %59 = OpSLessThan %38 %57 %58
               OpBranchConditional %59 %53 %54
         %53 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpIAdd %6 %60 %17
               OpStore %8 %61
               OpStore %62 %17
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %6 %62
         %70 = OpSLessThan %38 %68 %69
         %71 = OpLoad %6 %8
         %72 = OpSLessThan %38 %71 %58
         %73 = OpLogicalAnd %38 %70 %72
               OpBranchConditional %73 %64 %65
         %64 = OpLabel
         %74 = OpLoad %6 %8
         %75 = OpIAdd %6 %74 %17
               OpStore %8 %75
         %77 = OpLoad %6 %62
               OpStore %76 %77
               OpBranch %78
         %78 = OpLabel
               OpLoopMerge %80 %81 None
               OpBranch %82
         %82 = OpLabel
         %83 = OpLoad %6 %76
         %84 = OpSLessThanEqual %38 %83 %17
         %85 = OpLoad %6 %8
         %86 = OpSLessThan %38 %85 %58
         %87 = OpLogicalAnd %38 %84 %86
               OpBranchConditional %87 %79 %80
         %79 = OpLabel
         %88 = OpLoad %6 %8
         %89 = OpIAdd %6 %88 %17
               OpStore %8 %89
         %90 = OpLoad %6 %76
         %91 = OpLoad %6 %76
         %92 = OpAccessChain %7 %16 %91
         %93 = OpLoad %6 %92
         %94 = OpAccessChain %7 %14 %90
               OpStore %94 %93
               OpBranch %81
         %81 = OpLabel
         %95 = OpLoad %6 %76
         %96 = OpIAdd %6 %95 %17
               OpStore %76 %96
               OpBranch %78
         %80 = OpLabel
               OpBranch %66
         %66 = OpLabel
         %97 = OpLoad %6 %49
         %98 = OpLoad %6 %62
         %99 = OpIAdd %6 %98 %97
               OpStore %62 %99
               OpBranch %63
         %65 = OpLabel
               OpBranch %55
         %55 = OpLabel
        %101 = OpAccessChain %26 %25 %9 %100
        %102 = OpLoad %6 %101
        %103 = OpLoad %6 %49
        %104 = OpIMul %6 %103 %102
               OpStore %49 %104
               OpBranch %52
         %54 = OpLabel
        %105 = OpAccessChain %26 %25 %9 %17
        %106 = OpLoad %6 %105
        %107 = OpAccessChain %7 %14 %106
        %108 = OpLoad %6 %107
        %109 = OpAccessChain %26 %25 %9 %17
        %110 = OpLoad %6 %109
        %111 = OpIEqual %38 %108 %110
               OpSelectionMerge %113 None
               OpBranchConditional %111 %112 %113
        %112 = OpLabel
        %114 = OpAccessChain %26 %25 %9 %17
        %115 = OpLoad %6 %114
        %116 = OpAccessChain %7 %16 %115
        %117 = OpLoad %6 %116
        %118 = OpAccessChain %26 %25 %9 %9
        %119 = OpLoad %6 %118
        %120 = OpIEqual %38 %117 %119
               OpBranch %113
        %113 = OpLabel
        %121 = OpPhi %38 %111 %54 %120 %112
               OpSelectionMerge %123 None
               OpBranchConditional %121 %122 %123
        %122 = OpLabel
        %124 = OpAccessChain %26 %25 %9 %9
        %125 = OpLoad %6 %124
        %126 = OpAccessChain %7 %14 %125
        %127 = OpLoad %6 %126
        %128 = OpAccessChain %26 %25 %9 %17
        %129 = OpLoad %6 %128
        %130 = OpIEqual %38 %127 %129
               OpBranch %123
        %123 = OpLabel
        %131 = OpPhi %38 %121 %113 %130 %122
               OpSelectionMerge %133 None
               OpBranchConditional %131 %132 %133
        %132 = OpLabel
        %134 = OpAccessChain %26 %25 %9 %9
        %135 = OpLoad %6 %134
        %136 = OpAccessChain %7 %16 %135
        %137 = OpLoad %6 %136
        %138 = OpAccessChain %26 %25 %9 %17
        %139 = OpLoad %6 %138
        %140 = OpIEqual %38 %137 %139
               OpBranch %133
        %133 = OpLabel
        %141 = OpPhi %38 %131 %123 %140 %132
               OpSelectionMerge %143 None
               OpBranchConditional %141 %142 %161
        %142 = OpLabel
        %148 = OpAccessChain %26 %25 %9 %9
        %149 = OpLoad %6 %148
        %150 = OpConvertSToF %144 %149
        %151 = OpAccessChain %26 %25 %9 %17
        %152 = OpLoad %6 %151
        %153 = OpConvertSToF %144 %152
        %154 = OpAccessChain %26 %25 %9 %17
        %155 = OpLoad %6 %154
        %156 = OpConvertSToF %144 %155
        %157 = OpAccessChain %26 %25 %9 %9
        %158 = OpLoad %6 %157
        %159 = OpConvertSToF %144 %158
        %160 = OpCompositeConstruct %145 %150 %153 %156 %159
               OpStore %147 %160
               OpBranch %143
        %161 = OpLabel
        %162 = OpAccessChain %26 %25 %9 %17
        %163 = OpLoad %6 %162
        %164 = OpConvertSToF %144 %163
        %165 = OpCompositeConstruct %145 %164 %164 %164 %164
               OpStore %147 %165
               OpBranch %143
        %143 = OpLabel
               OpReturn
               OpFunctionEnd
