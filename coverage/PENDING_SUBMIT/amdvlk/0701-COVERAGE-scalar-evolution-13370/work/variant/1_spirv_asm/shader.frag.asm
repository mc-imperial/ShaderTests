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
               OpName %9 "v"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %29 "i"
               OpName %38 "j"
               OpName %76 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %76 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 3
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpTypePointer Uniform %6
         %23 = OpConstant %6 1
         %24 = OpTypeBool
         %28 = OpTypePointer Function %6
         %30 = OpConstant %6 2
         %68 = OpTypeVector %24 4
         %73 = OpTypeFloat 32
         %74 = OpTypeVector %73 4
         %75 = OpTypePointer Output %74
         %76 = OpVariable %75 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %29 = OpVariable %28 Function
         %38 = OpVariable %28 Function
         %18 = OpAccessChain %17 %15 %16 %16
         %19 = OpLoad %6 %18
         %20 = OpCompositeConstruct %7 %19 %19 %19 %19
               OpStore %9 %20
         %21 = OpAccessChain %17 %15 %16 %16
         %22 = OpLoad %6 %21
         %25 = OpIEqual %24 %22 %23
               OpSelectionMerge %27 None
               OpBranchConditional %25 %26 %27
         %26 = OpLabel
               OpStore %29 %30
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %6 %29
         %37 = OpSGreaterThanEqual %24 %36 %23
               OpBranchConditional %37 %32 %33
         %32 = OpLabel
         %39 = OpAccessChain %17 %15 %16 %30
         %40 = OpLoad %6 %39
               OpStore %38 %40
               OpBranch %41
         %41 = OpLabel
               OpLoopMerge %43 %44 None
               OpBranch %45
         %45 = OpLabel
         %46 = OpLoad %6 %38
         %47 = OpLoad %6 %29
         %48 = OpSGreaterThanEqual %24 %46 %47
               OpBranchConditional %48 %42 %43
         %42 = OpLabel
         %49 = OpLoad %6 %29
         %50 = OpAccessChain %28 %9 %49
         %51 = OpLoad %6 %50
         %52 = OpISub %6 %51 %23
               OpStore %50 %52
               OpBranch %44
         %44 = OpLabel
         %53 = OpLoad %6 %38
         %54 = OpISub %6 %53 %23
               OpStore %38 %54
               OpBranch %41
         %43 = OpLabel
               OpBranch %34
         %34 = OpLabel
         %55 = OpLoad %6 %29
         %56 = OpISub %6 %55 %23
               OpStore %29 %56
               OpBranch %31
         %33 = OpLabel
               OpBranch %27
         %27 = OpLabel
         %57 = OpLoad %7 %9
         %58 = OpAccessChain %17 %15 %16 %16
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %17 %15 %16 %16
         %61 = OpLoad %6 %60
         %62 = OpSNegate %6 %61
         %63 = OpAccessChain %17 %15 %16 %23
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %17 %15 %16 %16
         %66 = OpLoad %6 %65
         %67 = OpCompositeConstruct %7 %59 %62 %64 %66
         %69 = OpIEqual %68 %57 %67
         %70 = OpAll %24 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %90
         %71 = OpLabel
         %77 = OpAccessChain %17 %15 %16 %16
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %73 %78
         %80 = OpAccessChain %17 %15 %16 %23
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %73 %81
         %83 = OpAccessChain %17 %15 %16 %23
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %73 %84
         %86 = OpAccessChain %17 %15 %16 %16
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %73 %87
         %89 = OpCompositeConstruct %74 %79 %82 %85 %88
               OpStore %76 %89
               OpBranch %72
         %90 = OpLabel
         %91 = OpAccessChain %17 %15 %16 %23
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %73 %92
         %94 = OpCompositeConstruct %74 %93 %93 %93 %93
               OpStore %76 %94
               OpBranch %72
         %72 = OpLabel
               OpReturn
               OpFunctionEnd
