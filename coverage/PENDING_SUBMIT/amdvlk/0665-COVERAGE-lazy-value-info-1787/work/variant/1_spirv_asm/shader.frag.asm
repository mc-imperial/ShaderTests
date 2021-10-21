; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 95
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %76
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(f1;"
               OpName %10 "x"
               OpName %14 "_GLF_global_loop_count"
               OpName %17 "i"
               OpName %43 "buf0"
               OpMemberName %43 0 "_GLF_uniform_int_values"
               OpName %45 ""
               OpName %54 "a"
               OpName %57 "buf1"
               OpMemberName %57 0 "_GLF_uniform_float_values"
               OpName %59 ""
               OpName %60 "param"
               OpName %66 "param"
               OpName %76 "_GLF_color"
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
               OpDecorate %56 ArrayStride 16
               OpMemberDecorate %57 0 Offset 0
               OpDecorate %57 Block
               OpDecorate %59 DescriptorSet 0
               OpDecorate %59 Binding 1
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8 %7
         %13 = OpTypePointer Private %8
         %14 = OpVariable %13 Private
         %15 = OpConstant %8 0
         %16 = OpTypePointer Function %8
         %18 = OpConstant %8 1
         %25 = OpConstant %8 800
         %26 = OpTypeBool
         %29 = OpConstant %8 10
         %40 = OpTypeInt 32 0
         %41 = OpConstant %40 2
         %42 = OpTypeArray %8 %41
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpTypePointer Uniform %8
         %55 = OpConstant %40 1
         %56 = OpTypeArray %6 %55
         %57 = OpTypeStruct %56
         %58 = OpTypePointer Uniform %57
         %59 = OpVariable %58 Uniform
         %61 = OpTypePointer Uniform %6
         %65 = OpConstant %6 35.6100006
         %74 = OpTypeVector %6 4
         %75 = OpTypePointer Output %74
         %76 = OpVariable %75 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %54 = OpVariable %16 Function
         %60 = OpVariable %7 Function
         %66 = OpVariable %7 Function
               OpStore %14 %15
         %62 = OpAccessChain %61 %59 %15 %15
         %63 = OpLoad %6 %62
               OpStore %60 %63
         %64 = OpFunctionCall %8 %11 %60
               OpStore %54 %64
               OpStore %66 %65
         %67 = OpFunctionCall %8 %11 %66
         %68 = OpLoad %8 %54
         %69 = OpIAdd %8 %68 %67
               OpStore %54 %69
         %70 = OpLoad %8 %54
         %71 = OpIEqual %26 %70 %18
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %90
         %72 = OpLabel
         %77 = OpAccessChain %46 %45 %15 %15
         %78 = OpLoad %8 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %46 %45 %15 %18
         %81 = OpLoad %8 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpAccessChain %46 %45 %15 %18
         %84 = OpLoad %8 %83
         %85 = OpConvertSToF %6 %84
         %86 = OpAccessChain %46 %45 %15 %15
         %87 = OpLoad %8 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpCompositeConstruct %74 %79 %82 %85 %88
               OpStore %76 %89
               OpBranch %73
         %90 = OpLabel
         %91 = OpAccessChain %46 %45 %15 %18
         %92 = OpLoad %8 %91
         %93 = OpConvertSToF %6 %92
         %94 = OpCompositeConstruct %74 %93 %93 %93 %93
               OpStore %76 %94
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %17 = OpVariable %16 Function
               OpStore %17 %18
               OpBranch %19
         %19 = OpLabel
               OpLoopMerge %21 %22 None
               OpBranch %23
         %23 = OpLabel
         %24 = OpLoad %8 %17
         %27 = OpSLessThan %26 %24 %25
         %28 = OpLoad %8 %14
         %30 = OpSLessThan %26 %28 %29
         %31 = OpLogicalAnd %26 %27 %30
               OpBranchConditional %31 %20 %21
         %20 = OpLabel
         %32 = OpLoad %8 %14
         %33 = OpIAdd %8 %32 %18
               OpStore %14 %33
         %34 = OpLoad %8 %17
         %35 = OpConvertSToF %6 %34
         %36 = OpLoad %6 %10
         %37 = OpFOrdGreaterThanEqual %26 %35 %36
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
         %47 = OpAccessChain %46 %45 %15 %15
         %48 = OpLoad %8 %47
               OpReturnValue %48
         %39 = OpLabel
               OpBranch %22
         %22 = OpLabel
         %50 = OpLoad %8 %17
         %51 = OpIAdd %8 %50 %18
               OpStore %17 %51
               OpBranch %19
         %21 = OpLabel
               OpReturnValue %15
               OpFunctionEnd
