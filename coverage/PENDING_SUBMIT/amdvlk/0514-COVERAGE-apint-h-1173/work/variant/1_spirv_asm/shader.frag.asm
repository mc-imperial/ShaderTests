; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 61
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %42 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %42 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 2
         %17 = OpTypePointer Uniform %6
         %26 = OpTypeBool
         %30 = OpConstant %6 1
         %39 = OpTypeFloat 32
         %40 = OpTypeVector %39 4
         %41 = OpTypePointer Output %40
         %42 = OpVariable %41 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %8
         %27 = OpSGreaterThanEqual %26 %25 %15
               OpBranchConditional %27 %21 %22
         %21 = OpLabel
         %28 = OpLoad %6 %8
         %29 = OpSDiv %6 %28 %16
         %31 = OpISub %6 %29 %30
               OpStore %8 %31
               OpBranch %23
         %23 = OpLabel
               OpBranch %20
         %22 = OpLabel
         %32 = OpLoad %6 %8
         %33 = OpAccessChain %17 %14 %15 %15
         %34 = OpLoad %6 %33
         %35 = OpSNegate %6 %34
         %36 = OpIEqual %26 %32 %35
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %56
         %37 = OpLabel
         %43 = OpAccessChain %17 %14 %15 %15
         %44 = OpLoad %6 %43
         %45 = OpConvertSToF %39 %44
         %46 = OpAccessChain %17 %14 %15 %30
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %39 %47
         %49 = OpAccessChain %17 %14 %15 %30
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %39 %50
         %52 = OpAccessChain %17 %14 %15 %15
         %53 = OpLoad %6 %52
         %54 = OpConvertSToF %39 %53
         %55 = OpCompositeConstruct %40 %45 %48 %51 %54
               OpStore %42 %55
               OpBranch %38
         %56 = OpLabel
         %57 = OpAccessChain %17 %14 %15 %30
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %39 %58
         %60 = OpCompositeConstruct %40 %59 %59 %59 %59
               OpStore %42 %60
               OpBranch %38
         %38 = OpLabel
               OpReturn
               OpFunctionEnd
