; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 59
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %40
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %40 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %40 Location 0
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
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %6 2
         %24 = OpConstant %6 63677
         %25 = OpTypeVector %6 2
         %29 = OpConstant %9 1
         %33 = OpTypeBool
         %37 = OpTypeFloat 32
         %38 = OpTypeVector %37 4
         %39 = OpTypePointer Output %38
         %40 = OpVariable %39 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %20 = OpLoad %6 %8
         %22 = OpAccessChain %17 %14 %15 %21
         %23 = OpLoad %6 %22
         %26 = OpCompositeConstruct %25 %23 %24
         %27 = OpCompositeConstruct %25 %20 %20
         %28 = OpSDiv %25 %27 %26
         %30 = OpCompositeExtract %6 %28 1
         %31 = OpAccessChain %17 %14 %15 %15
         %32 = OpLoad %6 %31
         %34 = OpIEqual %33 %30 %32
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %54
         %35 = OpLabel
         %41 = OpAccessChain %17 %14 %15 %21
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %37 %42
         %44 = OpAccessChain %17 %14 %15 %15
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %37 %45
         %47 = OpAccessChain %17 %14 %15 %15
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %37 %48
         %50 = OpAccessChain %17 %14 %15 %21
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %37 %51
         %53 = OpCompositeConstruct %38 %43 %46 %49 %52
               OpStore %40 %53
               OpBranch %36
         %54 = OpLabel
         %55 = OpAccessChain %17 %14 %15 %15
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %37 %56
         %58 = OpCompositeConstruct %38 %57 %57 %57 %57
               OpStore %40 %58
               OpBranch %36
         %36 = OpLabel
               OpReturn
               OpFunctionEnd
