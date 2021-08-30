; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 112
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %93
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %13 "func(struct-S-i11;i1;"
               OpName %11 "s"
               OpName %12 "x"
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_int_values"
               OpName %20 ""
               OpName %35 "i"
               OpName %47 "arr"
               OpName %59 "index"
               OpName %61 "param"
               OpName %64 "param"
               OpName %72 "param"
               OpName %75 "param"
               OpName %93 "_GLF_color"
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
               OpDecorate %93 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
          %9 = OpTypePointer Function %6
         %10 = OpTypeFunction %2 %8 %9
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 3
         %17 = OpTypeArray %6 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpConstant %6 0
         %22 = OpConstant %6 1
         %23 = OpTypePointer Uniform %6
         %28 = OpTypeBool
         %42 = OpConstant %6 10
         %44 = OpConstant %15 10
         %45 = OpTypeArray %7 %44
         %46 = OpTypePointer Function %45
         %90 = OpTypeFloat 32
         %91 = OpTypeVector %90 4
         %92 = OpTypePointer Output %91
         %93 = OpVariable %92 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %35 = OpVariable %9 Function
         %47 = OpVariable %46 Function
         %59 = OpVariable %9 Function
         %61 = OpVariable %8 Function
         %64 = OpVariable %9 Function
         %72 = OpVariable %8 Function
         %75 = OpVariable %9 Function
               OpStore %35 %21
               OpBranch %36
         %36 = OpLabel
               OpLoopMerge %38 %39 None
               OpBranch %40
         %40 = OpLabel
         %41 = OpLoad %6 %35
         %43 = OpSLessThan %28 %41 %42
               OpBranchConditional %43 %37 %38
         %37 = OpLabel
         %48 = OpLoad %6 %35
         %49 = OpAccessChain %9 %47 %48 %21
               OpStore %49 %21
               OpBranch %39
         %39 = OpLabel
         %50 = OpLoad %6 %35
         %51 = OpIAdd %6 %50 %22
               OpStore %35 %51
               OpBranch %36
         %38 = OpLabel
         %52 = OpAccessChain %23 %20 %21 %22
         %53 = OpLoad %6 %52
         %54 = OpAccessChain %23 %20 %21 %21
         %55 = OpLoad %6 %54
         %56 = OpIEqual %28 %53 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %69
         %57 = OpLabel
         %60 = OpLoad %6 %59
         %62 = OpAccessChain %8 %47 %60
         %63 = OpLoad %7 %62
               OpStore %61 %63
         %65 = OpLoad %6 %59
               OpStore %64 %65
         %66 = OpFunctionCall %2 %13 %61 %64
         %67 = OpLoad %7 %61
         %68 = OpAccessChain %8 %47 %60
               OpStore %68 %67
               OpBranch %58
         %69 = OpLabel
         %70 = OpAccessChain %23 %20 %21 %21
         %71 = OpLoad %6 %70
         %73 = OpAccessChain %8 %47 %71
         %74 = OpLoad %7 %73
               OpStore %72 %74
         %76 = OpAccessChain %23 %20 %21 %22
         %77 = OpLoad %6 %76
               OpStore %75 %77
         %78 = OpFunctionCall %2 %13 %72 %75
         %79 = OpLoad %7 %72
         %80 = OpAccessChain %8 %47 %71
               OpStore %80 %79
               OpBranch %58
         %58 = OpLabel
         %81 = OpAccessChain %23 %20 %21 %21
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %9 %47 %82 %21
         %84 = OpLoad %6 %83
         %85 = OpAccessChain %23 %20 %21 %22
         %86 = OpLoad %6 %85
         %87 = OpIEqual %28 %84 %86
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %107
         %88 = OpLabel
         %94 = OpAccessChain %23 %20 %21 %22
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %90 %95
         %97 = OpAccessChain %23 %20 %21 %21
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %90 %98
        %100 = OpAccessChain %23 %20 %21 %21
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %90 %101
        %103 = OpAccessChain %23 %20 %21 %22
        %104 = OpLoad %6 %103
        %105 = OpConvertSToF %90 %104
        %106 = OpCompositeConstruct %91 %96 %99 %102 %105
               OpStore %93 %106
               OpBranch %89
        %107 = OpLabel
        %108 = OpAccessChain %23 %20 %21 %21
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %90 %109
        %111 = OpCompositeConstruct %91 %110 %110 %110 %110
               OpStore %93 %111
               OpBranch %89
         %89 = OpLabel
               OpReturn
               OpFunctionEnd
         %13 = OpFunction %2 None %10
         %11 = OpFunctionParameter %8
         %12 = OpFunctionParameter %9
         %14 = OpLabel
         %24 = OpAccessChain %23 %20 %21 %22
         %25 = OpLoad %6 %24
         %26 = OpAccessChain %23 %20 %21 %21
         %27 = OpLoad %6 %26
         %29 = OpIEqual %28 %25 %27
               OpSelectionMerge %31 None
               OpBranchConditional %29 %30 %31
         %30 = OpLabel
               OpReturn
         %31 = OpLabel
         %33 = OpLoad %6 %12
         %34 = OpAccessChain %9 %11 %21
               OpStore %34 %33
               OpReturn
               OpFunctionEnd
